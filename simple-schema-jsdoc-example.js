function printSchema(schema, typeName) {
  console.log("/** \n\n@typedef {%s} %s\n*/", schema.jSDocType(), typeName)
}

BookSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  author: {
    type: String,
    label: "Author"
  },
  copies: {
    type: Number,
    label: "Number of copies",
    min: 0
  },
  lastCheckedOut: {
    type: Date,
    label: "Last date this book was checked out",
    optional: true
  },
  summary: {
    type: String,
    label: "Brief summary",
    optional: true,
    max: 1000
  }
});


AddressSchema = new SimpleSchema({
  street: {
    type: String,
    max: 100
  },
  city: {
    type: String,
    max: 50
  },
  state: {
    type: String,
    regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/
  },
  zip: {
    type: String,
    regEx: /^[0-9]{5}$/
  }
});

CustomerSchema = new SimpleSchema({
  billingAddress: {
    type: AddressSchema
  },
  shippingAddresses: {
    type: [AddressSchema],
    minCount: 1
  }
});
console.log("#########Book Schema")
printSchema(BookSchema, "Book");

console.log("#########Address Schema")
printSchema(AddressSchema, "Address");

console.log("#########Customerk Schema")
printSchema(CustomerSchema, "Customer");


