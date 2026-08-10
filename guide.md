# Bug triage and minimal fix

This is a short issue investigation task designed for a 15–25 minute recording.

## Goal
Handle a user-reported bug by reproducing it, narrowing the root cause, and applying the smallest safe fix.

## Apps to use
- VS Code
- Terminal
- Notes or issue tracker

## Exact recording steps
1. Open the issue or bug description in the notes or issue tracker and read it aloud.
2. Explain that the bug is likely caused by an edge case in input handling.
3. Open the relevant function in VS Code and inspect the code path.
4. Reproduce the issue in a small terminal command or script, showing the incorrect result.
5. Explain the exact root cause: the input is not normalized before being parsed, so whitespace or invalid values produce unexpected behavior.
6. Fix the code by adding minimal validation and input cleanup.
7. Re-run the reproduction to show the output is now correct.
8. Summarize why this is the root cause and why the fix is narrow and low-risk.

## What you should say while recording
- "I’m reproducing the problem first so I know I am fixing the right thing."
- "This is a classic input normalization issue. The function assumes the value is already valid, but it isn’t."
- "The fix is small because it only addresses the real failure mode and does not broaden the behavior beyond the bug."

## Deliverable
A short issue summary, the minimal code fix, and a proof that the bug is resolved.
