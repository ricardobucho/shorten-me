require 'test_helper'

class ShortnerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get shortner_index_url
    assert_response :success
  end

end
