# Parse message trailers

Parse RFC2822 message and extract them from messages and make them
available to the workflow.

## Usage

To parse the trailers from the head commit message, you can define the
following action.

```yaml
uses: actions/trailers@v1.0
with:
  message: ${{ github.head_commit.message }}
```
