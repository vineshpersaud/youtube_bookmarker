class VideosController < ApplicationController
  def index
    videos = Video.all
    render json:videos
  end

  def show
    video = Video.find_by_id(params[:id])
    if video
      render json: video, :methods => :url
    else
      render json:{message: "no such video"}, status: 400
    end
  end

  def create
    video = Video.new(video_params)
      if video.save
        render json: video, :methods => :url
      else
        render json:{message: video.errors}, status: 400
      end
  end

  def edit
  end

  def update
  end

  def destroy
    video = Video.find_by_id(params[:id])
    videos = Video.all
    if video.delete
      render json: videos
    else
      render json:{message: video.errors}, status: 400
    end
  end


  def video_params
    params.require(:video).permit(:title,:url)
  end

end
