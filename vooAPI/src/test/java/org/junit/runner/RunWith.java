package org.junit.runner;

import org.springframework.test.context.junit4.SpringRunner;

public @interface RunWith {

	Class<SpringRunner> value();

}
