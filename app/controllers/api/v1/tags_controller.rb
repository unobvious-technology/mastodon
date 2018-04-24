# frozen_string_literal: true

class Api::V1::TagsController < Api::BaseController
  include Authorization

  before_action -> { doorkeeper_authorize! :write }
  before_action :require_user!

  respond_to :json

  def search
    @tags = Tag.search_for(query, 10)
    render json: @tags, each_serializer: REST::TagSerializer
  end

  private

  def query
    params[:q].gsub(/\A#/, '')
  end
end
