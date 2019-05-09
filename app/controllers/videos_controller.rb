class VideosController < ApplicationController
  def index
    videos = Video.all
    render json:videos
  end

  def create
    video = Video.new(video_params)
  end

  def edit
  end

  def update
  end

  def destroy
  end


  def video_params
    params.require(:video).permit(:title,:url)
  end

end
