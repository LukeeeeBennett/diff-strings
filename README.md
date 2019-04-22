# @lbennett/diff-strings

Diff 2 strings CLI tool

## Installation

```
npm install --global @lbennett/diff-strings
# OR
yarn global add @lbennett/diff-strings
```

## Usage

```
> diff-strings "long-string" "other long string"
> other long- string
> # $green(other) $grey(long)$red(-) $grey(string)
```
