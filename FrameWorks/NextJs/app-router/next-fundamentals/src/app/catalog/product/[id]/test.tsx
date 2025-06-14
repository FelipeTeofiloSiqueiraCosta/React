export async function TestClient() {
  await new Promise(function (resolve) {
    setTimeout(resolve, 2000)
  })
  return (
    <>
      <h1 className="font-bold">Server component inside of client-component</h1>
    </>
  )
}
