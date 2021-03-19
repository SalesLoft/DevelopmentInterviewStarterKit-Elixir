defmodule InterviewWeb.PageController do
  use InterviewWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
