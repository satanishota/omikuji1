class HomesController < ApplicationController
  def top
    @food1 = Food.where(line_id: 1).order(:last_name)
    @food2 = Food.where(line_id: 2).order(:last_name)
    @food3 = Food.where(line_id: 3).order(:last_name)
    @food4 = Food.where(line_id: 4).order(:last_name)
    @food5 = Food.where(line_id: 5).order(:last_name)
    @kuji = Food.new
  end

  def create
    if params[:food] == nil

      @food1 = Food.where(line_id: 1).order(:last_name)
      @food2 = Food.where(line_id: 2).order(:last_name)
      @food3 = Food.where(line_id: 3).order(:last_name)
      @food4 = Food.where(line_id: 4).order(:last_name)
      @food5 = Food.where(line_id: 5).order(:last_name)
      @kuji = Food.new
      flash[:alert] = "選択されていません"
  
      render :top
    else
    @color = params[:food][:color]
    render :middle
    end
  end


  def middle
    @color = nil
  end
  
  def turn
    @iro
  end


end
