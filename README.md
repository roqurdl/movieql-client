# Practice garphQL with ReactJS

-Using server before I made (movie REST API => GraghQL API).

useApolloClient를 이용해서 client에 접근이 가능하다. : Imperative(명령형) code
->
useQuery() (from @apollo/client) : Declarative(선언형) code

-Local only field vs Remote field
Remote field ==> use API

Local only field ==> never use API, apollo cache
fieldName @client ==> Declare Local only feild
use it same as Remote field
==> Darkmode, Volume etc.. 에 사용

Llik btn
=> apollo cache + fragment type
