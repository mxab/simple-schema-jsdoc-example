##JSDoc Sample

###Setup
```git submodule init && git submodule update```


###Run
```meteor``` Should result in:

```

/**
 @typedef {{
      title : string,
      author : string,
      copies : number,
      lastCheckedOut : (Date|undefined),
      summary : (string|undefined)
 }} Book
 */

/**
 @typedef {{
      street : string,
      city : string,
      state : string,
      zip : string
 }} Address
 */

/**
 @typedef {{
      billingAddress : {
              street : string,
              city : string,
              state : string,
              zip : string
      },
      shippingAddresses : Array.<{
                      street : string,
                      city : string,
                      state : string,
                      zip : string
              }>
 }} Customer
 */

```
