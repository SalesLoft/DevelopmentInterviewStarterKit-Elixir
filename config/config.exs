# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :interview,
  ecto_repos: [Interview.Repo]

# Configures the endpoint
config :interview, InterviewWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "wjobrdE1bFyjUrMRUZBspXo8R81817rxHdEI41eqEAQnQ70IwBz6McRzVaxdsnHC",
  render_errors: [view: InterviewWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: Interview.PubSub,
  live_view: [signing_salt: "wEv1fVuN"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
