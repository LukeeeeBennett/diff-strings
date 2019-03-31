### Install

```
> git clone https://gitlab.com/lbennett/diff-strings.git && cd diff-strings
> yarn && yarn link
```

yes, lazy with the bins!


### Use

```
> diff-strings "long-string" "other long string"
> other long- string
> # $green(other) $grey(long)$red(-) $grey(string)
```