class VisitHistoriesController < ApplicationController
  before_action :set_visit_history, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  # GET /visit_histories
  # GET /visit_histories.json
  def index
    @visit_histories = VisitHistory.all
  end

  # GET /visit_histories/1
  # GET /visit_histories/1.json
  def show
  end

  # GET /visit_histories/new
  def new
    @visit_history = VisitHistory.new
  end

  # GET /visit_histories/1/edit
  def edit
  end

  # POST /visit_histories
  # POST /visit_histories.json
  def create
    @visit_history = VisitHistory.new(visit_history_params)

    respond_to do |format|
      if @visit_history.save
        format.html { redirect_to @visit_history, notice: 'Visit history was successfully created.' }
        format.json { render :show, status: :created, location: @visit_history }
      else
        format.html { render :new }
        format.json { render json: @visit_history.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /visit_histories/1
  # PATCH/PUT /visit_histories/1.json
  def update
    respond_to do |format|
      if @visit_history.update(visit_history_params)
        format.html { redirect_to @visit_history, notice: 'Visit history was successfully updated.' }
        format.json { render :show, status: :ok, location: @visit_history }
      else
        format.html { render :edit }
        format.json { render json: @visit_history.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /visit_histories/1
  # DELETE /visit_histories/1.json
  def destroy
    @visit_history.destroy
    respond_to do |format|
      format.html { redirect_to visit_histories_url, notice: 'Visit history was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_visit_history
      @visit_history = VisitHistory.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def visit_history_params
      params.require(:visit_history).permit(:pageInfo, :ip, :openId, :stayTime)
    end
end
