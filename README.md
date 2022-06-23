# Parse message trailers

Parse RFC2822 message and extract them from messages and make them
available to the workflow.

For example, with the following commit message:

```
Just testing some stuff

This is a longer message that is the body of the commit message.
This is not part of the trailers.

Author: Mats Kindahl <mats@example.com>
Category: example
```

The trailers array will contain

| Key        | Value                             |
| ---------- | --------------------------------- |
| `author`   | `Mats Kindahl <mats@example.com>` |
| `category` | `example`                         |


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
