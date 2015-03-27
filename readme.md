##JSDoc Sample

###Setup
```git submodule init && git submodule update```


###Run
```meteor```

Should result in:

````

/**
 @name Book
 @type {{
      title : string,
      author : string,
      copies : number,
      lastCheckedOut : (Date|undefined),
      summary : (string|undefined)
 }}
 */

/**
 @name Address
 @type {{
      street : string,
      city : string,
      state : string,
      zip : string
 }}
 */

/**
 @name Customer
 @type {{
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
 }}
 */

````