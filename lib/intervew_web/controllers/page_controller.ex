defmodule IntervewWeb.PageController do
  use IntervewWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
