class FoodsController < ApplicationController
  def new
    @food = Food.new
  end

  def index
    @foods = Food.all
  end

  def create
    @food = Food.new(food_params)
    if @food.save
      redirect_to foods_path
    else
      render :new
    end  

  end
  
  def destroy
    @food = Food.find(params[:id])  # データ（レコード）を1件取得
    @food.destroy  # データ（レコード）を削除
    redirect_to foods_path  # 投稿一覧画面へリダイレクト
  end
  
  private
  def food_params
    params.require(:food).permit(:last_name, :kanji_name, :color, :line_id)
  end

end
