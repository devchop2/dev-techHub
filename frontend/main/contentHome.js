const url = "http://localhost/graphql";

const sendGraphQLRequest = () => {
  console.log("호출됨!");

  fetch(url, {
    // GraphQL 서버의 주소를 적어주세요
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer YOUR_TOKEN", // 필요하다면 인증 토큰을 여기에 추가
    },
    body: JSON.stringify({
      query: query,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("GraphQL 서버로부터 응답:", data);
      alert("서버 응답: " + JSON.stringify(data));
    })
    .catch((error) => {
      console.error("GraphQL 요청 중 오류 발생:", error);
    });
};
