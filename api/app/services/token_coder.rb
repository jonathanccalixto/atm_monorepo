module TokenCoder
  def self.encode(term)
    Base64.encode64(term.to_s)
  end

  def self.decode(token)
    Base64.decode64(token)
  end
end