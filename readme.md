##JSDoc Sample

###Setup
```git submodule init && git submodule update```


###Run
```meteor``` Should result in:

<<<<<<< HEAD
Should result in:

````
=======
```
>>>>>>> c64081f925e8ba4241cbe3a9a56521e5a310be72

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

```
