defmodule Intervew.Repo do
  use Ecto.Repo,
    otp_app: :intervew,
    adapter: Ecto.Adapters.Postgres
end
