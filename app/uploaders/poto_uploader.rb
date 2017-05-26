class PotoUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave
end
