import React from 'react'
import Map from './Map'


const App = () => {
  return (
    <div>
			<div class="theBackground"></div>
			<div class="gridcontainer">
				<div class="theTopHeader">
					<h1 class="title">Get Coffee!!</h1>
				</div>
				<Map/>
			 {/* Begining of Cafe div's */}
				<div class="cafeStyle">
					<div class="section cafeTopImage">
            <img src="./images/image-2.jpg"/>
            <div>
              <div>
							<h1>Raglan Roast</h1>
						</div>
						<div class="cafeAddress">
							<div class="row user-detail">
								<div>
									<h2>
										<i class="fa fa-map-marker" aria-hidden="true"></i>40 Abel Smith St, Te Aro, Wellington 6011
									</h2>
								</div>
							</div>
						</div>
					</div>
					</div>
					</div>
					{/* <!-- Cafe div --> */}
					<div class="cafeStyle">
						<div class="section cafeTopImage">
							<img src="./images/image-3.png"/>
              <div>
								<h1>Fidels Cafe</h1>
							</div>
							<div class="cafeAddress">
								<div class="row user-detail">
									<div>
										<h2>
											<i class="fa fa-map-marker" aria-hidden="true"></i>234 Cuba St, Te Aro, Wellington 6011
										</h2>
									</div>
								</div>
							</div>
						</div>
						</div>
						{/* <!-- Cafe div --> */}
						<div class="cafeStyle">
							<div class="section cafeTopImage">
								<img src="./images/image-6.JPG"/>
                <div>
									<h1>Marthas Pantry</h1>
								</div>
								<div class="cafeAddress">
									<div class="row user-detail">
										<div>
											<h2>
												<i class="fa fa-map-marker" aria-hidden="true"></i>276 Cuba St, Te Aro, Wellington 6011
											</h2>
										</div>
									</div>
								</div>
							</div>
							</div>
							{/* <!-- Cafe div --> */}
							<div class="cafeStyle">
								<div class="section cafeTopImage">
									<img src="./images/image-1.PNG"/>
                  <div>
										<h1>Your Cafe here</h1>
									</div>
									<div class="cafeAddress">
										<div class="row user-detail">
											<div>
												<h2>
													<i class="fa fa-map-marker" aria-hidden="true"></i>** Cuba St, Te Aro, Wellington 6011
												</h2>
											</div>
										</div>
									</div>
							</div>
								</div>
								{/* <!-- Cafe div --> */}
								<div class="cafeStyle">
									<div class="section cafeTopImage">
										<img src="./images/image-5.jpg"/>
                    <div>
											<h1>Emporio Coffee</h1>
										</div>
										<div class="cafeAddress">
											<div class="row user-detail">
												<div>
													<h2>
														<i class="fa fa-map-marker" aria-hidden="true"></i>90 Abel Smith St, Te Aro, Wellington 6011
													</h2>
												</div>
											</div>
										</div>
									</div>
									</div>
									{/* <!-- Cafe div --> */}
									<div class="cafeStyle">
										<div class="section cafeTopImage">
											<img src="./images/image-4.jpg"/>
                      <div>
												<h1>RetroGrove</h1>
											</div>
											<div class="cafeAddress">
												<div class="row user-detail">
													<div>
														<h2>
															<i class="fa fa-map-marker" aria-hidden="true"></i> 275 Cuba St, Te Aro, Wellington 6011
														</h2>
													</div>
												</div>
											</div>
										</div>
										</div>
										</div>
										</div>

  )			
}

export default App

