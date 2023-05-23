# Little (code) things



## GMail

### Simplify

This is not a little code thing of my own. Instead, it is a big code thing by an ex-googler. It is a very cheap way to make Gmail better and look much much nicer. Follow the link to get it: [Simplify](https://simpl.fyi/)

### Filter to delete emails permanentely and automatically in Gmail

`GMail_filter_deletePermanent.gs`

GMail (and most email providers) do not give users the ability to set up a filter that automatically and permanently delete emails based on certain conditions. This is a little piece of code using [Google Apps Script](https://script.google.com/home) to provide this functionality. It is set to work after setting a regular filter that sends emails from a given sender to the trash. You can easily change the code to be based on different criteria. It uses a time-based trigger, so there is always a chance to see the unwanted emails, but the likelihood is greatly reduced by using a sufficiently small time interval. _Instructions in the code file._

### Workaround to increase frequency of POP3 refresh in Gmail

`Gmail_frequentPOP3refresh.gs`

Say you have your work email in outlook, but outlook sucks, so you want to use Gmail. That's not too hard to do, you just need to set up Gmail to be able to [send email from your work email](https://support.google.com/mail/answer/22370?hl=en-GB) and to [check your work email](https://support.google.com/mail/answer/21289?hl=en-GB). This works well. However, there is no way to tell Gmail how often to check if there are new emails in your work email. You can tell Gmail to check manually, but that is not great, right? It seems that Gmail sets the frequency based on how much email you get, which makes sense. If you get lots of email, you will probably get a short refresh interval. What if you don't get that much email but you still want to get your work email soon enough? Here is a possible workaround, again using [Google Apps Script](https://script.google.com/home). I assume Google (or outlook) won't like this method, so I included a bit of noise in the time interval to try to hide the automatic nature of the emails.  _Instructions in the code file._

---
Please let me know if anything does not work or can be improved (while still remaining a little thing).
