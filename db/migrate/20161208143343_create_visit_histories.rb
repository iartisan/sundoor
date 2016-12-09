class CreateVisitHistories < ActiveRecord::Migration[5.0]
  def change
    create_table :visit_histories do |t|
      t.string :pageInfo
      t.string :ip
      t.string :openId
      t.string :stayTime

      t.timestamps
    end
  end
end
