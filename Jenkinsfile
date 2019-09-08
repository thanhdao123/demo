pipeline {
    agent any
    stages {
        stage('Example Build') {
            steps {
                withCheckout(scm) {
                    echo "GIT_COMMIT is ${env.GIT_COMMIT}"
                }
            }
        }
        stage('Example Test') {
            steps {
                echo 'Hello, JDK'
            }
        }
    }
}