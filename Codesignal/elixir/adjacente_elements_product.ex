def solution(inputArray) do
  calc(inputArray, [])
end

def calc([head | tail], results) do
 case Enum.count(tail) > 0 do
   true -> get_product([head | tail], results)
   false -> Enum.max(results)
 end
end

defp get_product([head | tail], results) do
 value = head * List.first(tail)
 new_results = [value | results]
 calc(tail, new_results)
end
