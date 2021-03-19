defmodule IntervewWeb.Router do
  use IntervewWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", IntervewWeb do
    pipe_through :browser

    get "/api/me", Api.ExampleController, :me
    get "/*_catchall", PageController, :index
  end
end
