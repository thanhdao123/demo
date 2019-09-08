pipeline {
    agent any
    stages {
        stage('Example Build') {
            steps {
                echo "GIT_COMMIT ${GIT_COMMIT}"
            }
        }
        stage('Example Test') {
            steps {
                echo 'Hello, JDK'
            }
        }
    }
}