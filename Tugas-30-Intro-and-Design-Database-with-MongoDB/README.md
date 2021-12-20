.
# 1. Relasi *Skiljek* dan Schema.

    Relasi: One to one 

    ```json
    {
      "_id": "ObjectId('61bdb08973a789fb495ce1c0')",
      "Full_Name": "Muhammad Farhan",
      "Email": "farhan@mail.com",
      "Phone_Number": "081234567890"
    }
    ```

<br>

# 2. Relasi *SkilShop* dan Schema.

    Relasi : One to few

    ```json
    {
      "_id":{"$oid":"61c0a8fad3d7425a2594e8f0"},
      "Full_Name":"M Farhan A",
      "Phone_Number":"0821234567890",
      "Address":[
        {"street":"Jl Ir Soekarno","city":"Surabaya"},{"street":"Kalimantan 37","city":"Jember"}
      ]
    }
    ```
<br>

# 3. Relasi *SkilShop* dan Schema
    
    Relasi: One to many

    ```json
    {
      "_id":{"$oid":"61c0aa9ad3d7425a2594e8f2"},
      "Product_Name":"Kaos Polos",
      "Brand_Name":"SkilShirt",
      "Varians":[
        {
          "Varian_Name":"Kaos Polos Hitam",
          "Color":"Hitam",
          "Quantity":"12",
          "Price":"Rp 99.000"
        },
        {
          "Varian_Name":"Kaos Polos Navy",
          "Color":"Navy",
          "Quantity":10,
          "Price":"Rp 99.000"
        }
      ]
    }
    ```

<br>

# 4. Relasi *SkilFlix* dan Schema

    Relasi: Many-to-many

    Schema:

    Cinema:

    ```json

    {
      "_id": "ObjectId('61bb2da4ecb3cf0106d64edc')",
      "cinemaName": "CGF",
      "location": "Pondok Indah Mall",
      "films": [
        "ObjectId('61bb3c1cecb3cf0106d64edf')", 
        "ObjectId('61c0aa9ad3d7425a2594e8f9')"
      ]
    },
    {
      "_id": "ObjectId('61c0aa9ad3d7425a2597e8f9')",
      "cinemaName": "Cinema31",
      "location": "Mall Kelapa Gading",
      "films": [
        "ObjectId('61bb3c1cecb3cf0106d64edf')",
        "ObjectId('61c0aa9ad3d7425a2594e8f9')"
      ]
    }
    ```

    Movie:

    ```json

    {
      "_id": "ObjectId('61bb3c1cecb3cf0106d64edf')",
      "filmName": "Venom 2",
      "cinemas": [
        "ObjectId('61bb2da4ecb3cf0106d64edc')", 
        "ObjectId('61c0aa9ad3d7425a2597e8f9')"
      ]
    },
    {
      "_id": "ObjectId('61c0aa9ad3d7425a2594e8f9')",
      "filmName": "Spiderman No Way Home",
      "cinemas": [
        "ObjectId('61bb2da4ecb3cf0106d64edc')", 
        "ObjectId('61c0aa9ad3d7425a2597e8f9')"
      ]
    }
    ```