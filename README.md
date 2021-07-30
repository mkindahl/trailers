# Parse message trailers

Parse RFC2822 message and extract them from messages and make them
available to the workflow.

## Inputs

### `message`

**Required** The message to parse.

## Outputs

### `trailers`

Map of trailers for the message. The keys of the map are converted to
lower-case regardless of the case of the name in the message.

## Example


```yaml
name: MyWorkflow
on: pull_request
jobs:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/trailers@v1.0
      id: pr
      with:
        message: ${{ github.head_commit.message }}
    - run: echo Author is ${{ github.steps.pr.trailers['author'] }}
```
