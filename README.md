# Endo E2E tests

## Import behavior matrix

[Import behavior readme](./matrix/README.md)  
[Import behavior matrix table](./matrix/table.md)

## Real package imports E2E tests

[Package imports tests readme](./test-imports/README.md)

### GH Actions Workflow for running e2e tests

A GH Action is set up to trigger on `repository_dispatch` coming from Endo repo to run the given ref against e2e tests and compare results with a snapshot.

The same workflow can also be triggered manually in this repo.

_Temporarily_ the e2e test is also hooked on all pushes. We might want to disable that.
