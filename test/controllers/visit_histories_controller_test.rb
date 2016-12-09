require 'test_helper'

class VisitHistoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @visit_history = visit_histories(:one)
  end

  test "should get index" do
    get visit_histories_url
    assert_response :success
  end

  test "should get new" do
    get new_visit_history_url
    assert_response :success
  end

  test "should create visit_history" do
    assert_difference('VisitHistory.count') do
      post visit_histories_url, params: { visit_history: { ip: @visit_history.ip, openId: @visit_history.openId, pageInfo: @visit_history.pageInfo, stayTime: @visit_history.stayTime } }
    end

    assert_redirected_to visit_history_url(VisitHistory.last)
  end

  test "should show visit_history" do
    get visit_history_url(@visit_history)
    assert_response :success
  end

  test "should get edit" do
    get edit_visit_history_url(@visit_history)
    assert_response :success
  end

  test "should update visit_history" do
    patch visit_history_url(@visit_history), params: { visit_history: { ip: @visit_history.ip, openId: @visit_history.openId, pageInfo: @visit_history.pageInfo, stayTime: @visit_history.stayTime } }
    assert_redirected_to visit_history_url(@visit_history)
  end

  test "should destroy visit_history" do
    assert_difference('VisitHistory.count', -1) do
      delete visit_history_url(@visit_history)
    end

    assert_redirected_to visit_histories_url
  end
end
