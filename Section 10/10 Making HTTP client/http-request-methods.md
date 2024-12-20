**IDEMPOTENT** <br>
 <b> Is a function which gives same output of a same input (no matter how much time we are giving input the output will be same). <br/>
Example = When sending a post request it will add something on the screen. <b>

**IDEMPOTENT** <br>
Those request which are interacting with database are not safe.

| **HTTP Method** | **Description**                                      | **Idempotent** | **Safe**   |
|------------------|------------------------------------------------------|----------------|------------|
| **GET**          | Retrieves data from the server.                     | Yes            | Yes        |
| **POST**         | Sends data to the server to create a new resource.  | No             | No         |
| **PUT**          | Updates or creates a resource at a specific URL.    | Yes            | No         |
| **DELETE**       | Deletes the specified resource from the server.     | Yes            | No         |
| **HEAD**         | Same as GET, but only retrieves headers.            | Yes            | Yes        |
| **OPTIONS**      | Describes communication options for a resource.     | Yes            | Yes        |
| **PATCH**        | Partially updates a resource at a specific URL.     | No             | No         |
