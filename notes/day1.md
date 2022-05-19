# Day 1

## Installation

```bash
npm i -g @nestjs/cli
nest new {new-project}
```

nest cli에 `g`키워드도 존재는 하는데 그러면 `git` 세팅이 안됨. 공홈에서도 `new` 키워드로 예시를 보여줌.
또한 `package manager` 를 무엇으로 할 지 선택권을 `cli` 에서 제공함.

## Set up Fastify

[Nest.js/ Fastify]
프레임워크 지원이나 `latency` 가 `Fastify` 가 괜찮다고 하니 설정을 해봄. 별다른 이유는 없음.
`Fastify` 는 기본적으로 `127.0.0.1` 로만 연결되기 때문에 다른 호스트와의 커넥션을 위해선 추가 설정을 해주어야함.

## Set up GraphQL

[Nest.js/ GraphQL]
GraphQL하고 Apollo Server 설치. 두 패키지간의 `compatible` 고려해서 버전 신경써줘야함.
`main.ts` 에서 참조하는 모듈에 `Apollo Driver` 세팅을 해주어야함.

### code first

`code first` 방식을 사용하면 `ts` 와 `decorator` 조합으로 `schema` 를 정의할 수 있음. `gql` 파일을 따로 관리하기 싫으면 이 방식 추천.
