def solution(inputString) do

  reversedString = String.split(inputString, "")
  |> Enum.reverse
  |> Enum.into("")

  if inputString  === reversedString  do
      true
  else
      false
  end
end
