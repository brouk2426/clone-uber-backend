## Resolver

- 정의한 schema를 return
- `query` + `mutation`
- `Args` decorator를 통해서 query, mutation에 `arguments` 사용 가능

### Object type (Schema)

- `Application` 에서 상호작용하는 도메인 개체. `Graphql` 의 schema

### InputType, ArgsType (DTO)

#### InputType

- `Class` 정의 형태로 `arguments`에서 호출해서 사용 가능.

  ```graphql
    mutation {
    some_mutate(inputType: {
    ...fields
    })
    }
  ```

- `Mutation`에서 예시로 쓰이고 있음

#### ArgsType

- `Class` 정의 형태로 `arguments`에서 호출해서 사용 가능.

  ```graphql
    query {
    some_query(field1, field2, ...fields)
    }
  ```

- `Query`에서 예시로 쓰이고 있음
