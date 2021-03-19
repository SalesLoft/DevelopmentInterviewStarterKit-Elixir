defmodule IntervewWeb.Api.ExampleController do
  use IntervewWeb, :controller

  def me(conn, _params) do
    # This is here to simulate some latency on the UI, to show async updates work
    Process.sleep(1000)

    json(conn, %{
      example: true,
      name: "Test Tester"
    })
  end
end
