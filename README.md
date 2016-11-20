# EfficientBrowsing
My First Chrome Extension

Features: 
1. Provides browsing summery of the User[In graph/table/piechart]:
            a. Today's browsing summery
            b. Previous days browsing History (front end yet to be completed)
2. Can block website after certain permitted time period per day
3. Can produce alert with user defined frequencies.


Architecture of extension:

Chrome.sync.storage keys
1. obj.Stored_BlockedArray_key : stores UserInputArray, which saves data of block website array: table(id="BLOCK_table1") 
2. obj.Stored_ReminderArray_key : stores UserReminderArray, which saves data of block website array: table(id="BLOCK_table1")
