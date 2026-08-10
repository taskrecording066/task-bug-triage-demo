# Bug triage notes

Issue: a value of `' '` or a non-numeric string is being passed into the parser.

Root cause: the function did not normalize whitespace before coercion. The fix is to trim values before parsing and reject invalid input cleanly.
