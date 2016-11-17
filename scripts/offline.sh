#!/bin/bash

function offlineServices {

	for service in */
	do
		cd "$service"
		for serviceFile in *
		do
			if [[ "$serviceFile" == *"serverless.y"* ]]
			then
				echo "Found serverless service at $service - running offline..."
				sls offline
			fi
		done	
		cd ..
	done
}


# recursively 'sls offline' all services in your project!
offlineServices
