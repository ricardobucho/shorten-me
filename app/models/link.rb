class Link < ApplicationRecord
	validates :url, :token, presence: true
	validates :url, length: { in: 4...250 }
	validates :url, url: true
	validates :token, length: { in: 6..8 }
	validates :token, format: { with: /\A[A-Za-z0-9\_\-\.]+\z/, multiline: false, message: 'accepts only alphanumeric characters' }
	validates :token, uniqueness: true
end
