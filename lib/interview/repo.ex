defmodule Interview.Repo do
  use Ecto.Repo,
    otp_app: :interview,
    adapter: Ecto.Adapters.Postgres
end
