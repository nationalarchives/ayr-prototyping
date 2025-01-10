//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/site-service', function(request, response) {
   //  console.log(request.body)
   //  response.redirect("/service")

    var service = request.body['serviceRequired']
    if (service == "tdr"){
        response.redirect("/tdr")
    } else if (service == "ayr"){
        response.redirect("https://mzusdk.axshare.com/?id=9tw68n&p=browse__3-all-access-users-1_4&c=1")
    } else {
        response.redirect("/services")
    }
})
