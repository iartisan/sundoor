json.extract! visit_history, :id, :pageInfo, :ip, :openId, :stayTime, :created_at, :updated_at
json.url visit_history_url(visit_history, format: :json)