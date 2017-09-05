### Testing task 1 code:

  Carry out static testing on the code below.  
  Read through the code.  Comment any errors you can see without correcting them.

 
def func1 val 
<!-- requiring the val to be held within () -->
  if val = 1
  <!-- indent return statements, additinally == for comparisons -->
  return true
  else
  return false
  end
end
  
dif max a b
<!-- change to def and contain both vars with in (a,b) -->
  if a > b
      return a 
  else
  <!-- missing return  -->
  b
  end 
end 
<!-- extra end  -->
end 
  
def looper 
  for i in 1..10
  <!-- indent required -->
  puts i
  end
end
 
failures = 0 
 
if looper == 10 
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
<!-- missing end  -->
 
  
if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end 
 
  
if max(100,1) == 100 
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1
  <!-- spelling error  -->
end

  
if failures 
<!-- no statement for if to work -->
  puts "Test Failed"
else
  puts "Test Passed"
end

<!-- missing end -->


