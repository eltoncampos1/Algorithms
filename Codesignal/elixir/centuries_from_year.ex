def solution(year) do

  century = year / 100

 if rem(year, 100) <= 0 do
      century
  else
      Float.ceil(century)
  end

end
