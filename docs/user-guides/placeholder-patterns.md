# Memory Resolver Custom Order – Placeholder Reference

This page documents the placeholder syntax used by the **CUSTOM_ORDER** memory strategy. Placeholders are resolved from earlier tasks in the same process and support plain output, structured fields, and JSON path traversal.

---

## 1. Placeholder structure (high level)

All placeholders follow this shape:

```
{task_<TASK_REF>[.output_<OUTPUT_SEL>][.<FIELD_OR_JSON>][|MODIFIER]}
```

- **TASK_REF**: task by **position** (digit(s)) or by **identifier** (alphanumeric + `_` / `-`).
- **OUTPUT_SEL**: optional; which output(s) to use.
- **FIELD_OR_JSON**: optional; either a built-in field (e.g. `citations`, `chunkSimilarityMetadata`) or a JSON path (`.json....`).
- **MODIFIER**: optional; only with `.json....` (e.g. `|json`, `|number`).

Anything that does not match this pattern is left **unresolved** (e.g. typos, wrong keywords, invalid characters).

---

## 2. Task reference

### 2.1 Position-based (numeric)

- **Pattern:** `task_` followed by **one or more digits**.
- **Meaning:** Task at that **position** in the process (0-based).
- **Allowed characters:** `0–9` only.

| Placeholder   | Meaning              |
|---------------|----------------------|
| `{task_0}`    | Task at position 0   |
| `{task_1}`    | Task at position 1   |
| `{task_5}`    | Task at position 5   |

**Invalid:** `{task_01}` is valid (numeric); `{task_1a}` is identifier-based (see below), not position-based.

### 2.2 Identifier-based (template identifier)

- **Pattern:** `task_` followed by a string that is **not** all digits.
- **Allowed characters:** letters, digits, underscore `_`, hyphen `-`.
- **Meaning:** Task whose **task template identifier** equals that string.

| Placeholder              | Meaning                          |
|--------------------------|----------------------------------|
| `{task_task-predecessor}`| Task with identifier `task-predecessor` |
| `{task_my_step_1}`       | Task with identifier `my_step_1` |
| `{task_StepA}`           | Task with identifier `StepA`     |

**Invalid:**

- Colons, spaces, slashes, etc.: e.g. `{task_bad:format.output_0}` → **left as-is** (unresolved).
- Identifier that does not exist in the process → **404** (task not found).

---

## 3. Output selection

- **Omitted:** Uses **output at position 0** for that task.
- **`.output_all`:** All outputs of the task, in order, joined by newline (or as list for list-like fields).
- **`.output_N`:** Single output at **position N** (non‑negative integer).

| Placeholder              | Meaning                          |
|--------------------------|----------------------------------|
| `{task_0}`               | Task 0, output position 0        |
| `{task_0.output_0}`      | Task 0, output position 0        |
| `{task_0.output_2}`      | Task 0, output position 2        |
| `{task_0.output_all}`    | Task 0, all outputs              |
| `{task_my-id.output_all}`| Task with id `my-id`, all outputs|

**Invalid:**

- Non-existent **output position** (e.g. task has only 0,1 and you use `output_99`) → **404** (output not found).
- Invalid keyword: e.g. `{task_0.output_badkeyword}` → **left as-is** (only `_all` or `_N` are valid).

---

## 4. Field types (non-JSON)

When you do **not** use `.json....`, you can use these built-in fields.

### 4.1 Default (no field)

- **Syntax:** `{task_<ref>}` or `{task_<ref>.output_<sel>}` with no trailing `.field`.
- **Behaviour:** Output text. If the output has an `output_url`, that URL is used (secure URL) instead of raw text.
- **Multiple outputs:** With `output_all`, texts (or URLs) are joined with newline.

**Examples:**

- `{task_0}` → text (or URL) of task 0, output 0.
- `{task_0.output_all}` → all outputs joined by `\n`.

### 4.2 chunkSimilarityMetadata

- **Full metadata:** `{task_<ref>.output_<sel>.chunkSimilarityMetadata}`  
  → JSON array of metadata objects.
- **One key:** `{task_<ref>.output_<sel>.chunkSimilarityMetadata.<key>}`  
  → Value of `<key>` from metadata (e.g. `source`, `page`, `chunkText`).  
  Special handling for `parentUrl` / `file_url`: resolved to secure URL and content may be parsed.

**Examples:**

- `{task_task-metadata.output_0.chunkSimilarityMetadata.source}` → e.g. `document.pdf`
- `{task_0.chunkSimilarityMetadata.chunkText}` → chunk text
- `{task_0.output_all.chunkSimilarityMetadata.chunkText}` → values from all outputs, newline‑separated

### 4.3 List / URL fields

- **citations**  
  `{task_<ref>.output_<sel>.citations}` → JSON array of citations.
- **search_results**  
  `{task_<ref>.output_<sel>.search_results}` → JSON array.
- **related_questions**  
  `{task_<ref>.output_<sel>.related_questions}` → JSON array.
- **output_url**  
  `{task_<ref>.output_<sel>.output_url}` → One URL or JSON array of URLs (secure).
- **images**  
  `{task_<ref>.output_<sel>.images}` → JSON array of image data.

---

## 5. JSON path (`.json....`)

Use when the task’s **output text** is JSON and you want a specific node.

### 5.1 Syntax

- **Pattern:** `.json.<path>`
- **Path:** Dot-separated segments. Each segment can be:
  - **Property:** `name`, `response`, `company`.
  - **Array index:** `items[0]`, `employees[1]`, `skills[2]`.
  - **Chained:** `response.company.name`, `employees[1].name`, `employees[0].skills[2]`.
  - **Root array:** path can be `[0]`, `[1]`, etc. (e.g. `{task_task-root-arr.json.[0]}`).

**Allowed in path:** letters, digits, `_`, `.`, `[`, `]`, `-`.

### 5.2 Modifiers (optional)

Only for `.json....` placeholders. Append `|modifier` at the end:

| Modifier   | Effect |
|------------|--------|
| (none) / `\|string` | String representation; objects/arrays serialized to JSON string. |
| `\|json`   | Always serialize the node to a JSON string. |
| `\|number` | Only if the node is a number → its string form; otherwise **empty string**. |
| `\|boolean`| Only if the node is a boolean → `"true"` / `"false"`; otherwise **empty string**. |

**Examples:**

- `{task_task-json.json.name}` → string value of `name`
- `{task_0.json.response.company.name}` → nested string
- `{task_task-json-mod.json.response.company|json}` → `{"name":"OpenAI","employees":375}`
- `{task_5.json.response.company.employees|number}` → `375`
- `{task_task-bool.json.data.isActive|boolean}` → `true`
- `{task_2.json.employees[2]|json}` → single object as JSON
- `{task_0.json.employees[1].name}` → e.g. `Jane Smith`
- `{task_task-root-arr.json.[0]}` → first element of root array
- `{task_3.json.response.data.employees[1].departments[1].name}` → deep nested value

### 5.3 JSON path – what is invalid or fails

- **Invalid JSON** in output text → replacement is **empty string**.
- **Path does not exist** (e.g. `nonexistent.path`) → **empty string**.
- **Null value** at path → **empty string**.
- **Modifier mismatch:**  
  e.g. `|number` on a string → **empty string**; `|boolean` on a string → **empty string**.
- **Array index:**
  - Out of bounds (e.g. `items[10]` when array length &lt; 10) → **empty string**.
  - Negative (e.g. `items[-1]`) → **empty string**.
  - Applied to non-array (e.g. `item[0]` when `item` is a string) → **empty string**.
- **Empty or whitespace-only output** when using `.json....` → **empty string**.

---

## 6. Quick reference – allowed vs invalid

### Allowed patterns (examples)

| Pattern type        | Example |
|---------------------|--------|
| Position, default   | `{task_0}`, `{task_0.output_0}` |
| Position, all       | `{task_0.output_all}` |
| Identifier, default | `{task_task-predecessor}`, `{task_my-step}` |
| Identifier, output  | `{task_my-step.output_1}`, `{task_my-step.output_all}` |
| Chunk metadata      | `{task_0.chunkSimilarityMetadata.source}`, `{task_0.output_0.chunkSimilarityMetadata.chunkText}` |
| List/URL fields     | `{task_0.citations}`, `{task_0.output_url}`, `{task_0.images}` |
| JSON path           | `{task_0.json.response.company.name}` |
| JSON path + index   | `{task_0.json.items[0]}`, `{task_0.json.employees[1].name}` |
| JSON path + modifier | `{task_0.json.data.count\|number}`, `{task_0.json.data.active\|boolean}`, `{task_0.json.data\|json}` |
| Root array          | `{task_task-root-arr.json.[0]}` |

### Invalid / not valid

| Case | Example | Result |
|------|--------|--------|
| Wrong characters in task ref | `{task_bad:format.output_0}` | Left unchanged (unresolved) |
| Invalid output keyword       | `{task_0.output_badkeyword}` | Left unchanged (unresolved) |
| Task not found (position)    | `{task_99.output_0}` (no task 99) | **404** (exception) |
| Task not found (identifier)  | `{task_non-existent-id.output_0}` | **404** (exception) |
| Output position not found    | `{task_0.output_99}` (no output 99) | **404** (exception) |
| Invalid JSON + .json path    | Output is `"Not valid JSON"` with `{task_0.json.data}` | Empty string |
| Non-existent JSON path       | `{task_0.json.nonexistent.path}` | Empty string |
| Wrong modifier type          | `{task_0.json.name\|number}` when `name` is string | Empty string |
| Array index out of bounds    | `{task_0.json.items[10]}` (array length &lt; 10) | Empty string |
| Negative array index         | `{task_0.json.items[-1]}` | Empty string |
| Index on non-array           | `{task_0.json.item[0]}` when `item` is string | Empty string |

---

## 7. Summary

- **Task:** `task_` + **position** (digits only) or **identifier** (alphanumeric, `_`, `-`).
- **Output:** omit = 0, or `.output_all` / `.output_N`.
- **Field:** optional: default (text/URL), `chunkSimilarityMetadata`, `citations`, `search_results`, `related_questions`, `output_url`, `images`, or `.json.<path>`.
- **Modifier:** optional and only with `.json`: `|string`, `|json`, `|number`, `|boolean`.
- Malformed or unknown placeholders stay as-is; missing task/output → 404; JSON/path/modifier issues → empty string (no exception).