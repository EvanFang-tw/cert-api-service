### Put cert list in configs folder, named `certs.json`
```sh
cp configs/certs.example.json configs/certs.json
```

```js
[
  {
    // Name of the cert
    "name": "Name the cert here",
    // This path attribute is the only one required parameter
    "path": "/absolute/path/to/the/cert/file.pem",
    // Put anything else you would like to add into response
    "remark": "Put remarks here"
  }
]
```